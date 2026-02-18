const searchInput = document.getElementById("jobSearch");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let jobs = document.querySelectorAll(".job-title");

        jobs.forEach(function (job) {
            let text = job.textContent.toLowerCase();
            job.parentElement.parentElement.style.display =
                text.includes(filter) ? "" : "none";
        });
    });
}
