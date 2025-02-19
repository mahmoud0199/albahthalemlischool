<script>
    // فتح وإغلاق القائمة الجانبية
    function toggleList() {
        var listContent = document.getElementById("listItems");
        listContent.classList.toggle("show");
    }

    // إغلاق القائمة عند الضغط في أي مكان خارجها
    document.addEventListener("click", function(event) {
        var listContainer = document.querySelector(".list-container");
        var listContent = document.getElementById("listItems");

        if (!listContainer.contains(event.target)) {
            listContent.classList.remove("show");
        }
    });
</script>
