// script.js

// Convert file to Base64 string
function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  
  // --------------------
  // Report submission
  // --------------------
  const reportForm = document.getElementById("reportForm");
  
  if (reportForm) {
    reportForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const location = document.getElementById("location").value;
      const description = document.getElementById("description").value;
      const imageFile = document.getElementById("image").files[0];
  
      try {
        let imageBase64 = "";
        if (imageFile) {
          imageBase64 = await toBase64(imageFile);
        }
  
        await db.collection("reports").add({
          name,
          location,
          description,
          imageBase64,
          status: "Pending",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
  
        alert("Report submitted successfully!");
        reportForm.reset();
      } catch (error) {
        console.error("Error submitting report:", error);
        alert("Something went wrong: " + error.message);
      }
    });
  }
  
  // --------------------
  // Admin dashboard
  // --------------------
  const reportList = document.getElementById("reportList");
  
  if (reportList) {
    db.collection("reports").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      // Clear table (except header)
      reportList.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Description</th>
          <th>Image</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      `;
  
      snapshot.forEach((doc) => {
        const report = doc.data();
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td>${report.name}</td>
          <td>${report.location}</td>
          <td>${report.description}</td>
          <td>${report.imageBase64 ? `<img src="${report.imageBase64}" width="80"/>` : "No Image"}</td>
          <td>${report.status}</td>
          <td>
            ${report.status === "Pending" ? 
              `<button onclick="markCleaned('${doc.id}')">Mark Cleaned</button>` 
              : "✅ Cleaned"}
          </td>
        `;
        reportList.appendChild(row);
      });
    });
  }
  
  // --------------------
  // Mark report as Cleaned
  // --------------------
  async function markCleaned(reportId) {
    try {
      await db.collection("reports").doc(reportId).update({
        status: "Cleaned"
      });
      alert("Status updated to Cleaned ✅");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status: " + error.message);
    }
  }
  
  // ------------------------------
// Fullscreen Image Preview Logic
// ------------------------------
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

if (reportList) {
  reportList.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      modal.style.display = "flex";
      modalImg.src = e.target.src;
    }
  });
}

if (closeModal) {
  closeModal.onclick = () => {
    modal.style.display = "none";
  };
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
