 var isVisible = false;

        function func() {
            //alert("ALERT");
            if (isVisible) {
                document.getElementById("button").style.display = "none";
                isVisible = !isVisible;
            } else {
                document.getElementById("button").style.display = "block";
                isVisible = !isVisible;
            }
        }

        function resizeEvent() {
            if (screen.width > 600) {
                document.getElementById("button").style.display = "block";
            } else {
                document.getElementById("button").style.display = "none";
            }
        }