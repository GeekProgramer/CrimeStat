const ctx5 = document.getElementById('rajasthan').getContext('2d');
const graphContainer5 = document.getElementById('rajasthanChart');
const graphInfo5 = document.getElementById('rgraphInfo');

const initialData5 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart5 = new Chart(ctx5, {
  type: 'line',
  data: initialData5,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo5(info) {
  graphInfo5.textContent = info;
}

const dropdown5 = document.getElementById('dropdown');
dropdown5.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo5;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in Rajasthan',
        data: [, 697, 949, 941, 1304, 1104],
        borderWidth: 1
      }]
    };
    newInfo5 = "The cases kept rising in this state except for the year 2015- 2016 and 2017-2018. The year 2015 – 2016 shows a constant line. After studying deep we found that, people were actually become a lot aware about cyber crimes but as we move forward in the graph we can see the increment again.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in Rajasthan',
        data: [, 1569, 1551, 1473, 1508, 1659],
        borderWidth: 1
      }]
    };
    newInfo5 = "When we look at the graph, we can see that the cases are high but the state hasn’t shown neither the significant decrement nor the increment, except the year 2018-19, it shows bit raised up cases in the area.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in Rajasthan',
        data: [, 2309, 2203, 2273, 2048, 2068],
        borderWidth: 1
      }]
    };
    newInfo5 = "As like M.P, this state also doesn’t show the significant change in the cases. It just show few increment and decrement. After seeing many cases in this state, we can draw a conclusion that law and order in this state actually needs to improve.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Rajasthan',
        data: [, 31151, 28224, 27422, 25993, 27866],
        borderWidth: 1
      }]
    };
    newInfo5 = "When we look at the graph, we can see that the cases are too high like the M.P state. The year 2014 crossed 30k cases and still never dropped down significantly. The year 2017 almost dropped to 25k cases but couldn’t cross it.";
  }

  barchart5.data = newData;
  barchart5.update();
  updateGraphInfo5(newInfo5);
});

graphContainer5.addEventListener('mouseenter', function() {
  graphInfo5.style.display = 'block';
});

graphContainer5.addEventListener('mouseleave', function() {
  graphInfo5.style.display = 'none';
});
