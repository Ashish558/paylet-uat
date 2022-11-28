const ctx = document.getElementById("balanceChar").getContext("2d");
const balanceChar = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [
            {
                label: "",

                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: "#6002EC",
            },
        ],
    },
    options: {
        scales: {
            y: {
                grid: {
                    color: "#fff",
                },

                beginAtZero: true,
            },

            x: {
                grid: { color: "#fff" },
            },
        },
        plugins: {
            legend: {
                position: "top",
                display: false,
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
    },
});
