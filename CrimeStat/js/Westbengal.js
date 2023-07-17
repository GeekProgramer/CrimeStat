const ctx7 = document.getElementById('wb').getContext('2d');
const graphContainer7 = document.getElementById('wbChart');
const graphInfo7 = document.getElementById('wbgraphInfo');

const initialData7 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart7 = new Chart(ctx7, {
  type: 'line',
  data: initialData7,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo7(info) {
  graphInfo7.textContent = info;
}

const dropdown7 = document.getElementById('dropdown');
dropdown7.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo7;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in West Bengal',
        data: [, 355, 398, 478, 568, 335],
        borderWidth: 1
      }]
    };
    newInfo7 = "The graph showed increment from 2014- 2017 but also a tremendous decrement in 2017-18. When we read about it more, we got to know that people were becoming aware about the cyber crimes and stated taking precautionary steps itself.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in West Bengal',
        data: [, 2096, 2044, 2001, 1933, 1933],
        borderWidth: 1
      }]
    };
    newInfo7 = "The graph shows a clear disappointment. As we can see, the cases are high and no significant changes can be seen . In fact from the year 2018-19 the cases are high but constant.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in West Bengal',
        data: [, 1566, 562, 709, 577, 503],
        borderWidth: 1
      }]
    };
    newInfo7 = "After looking at the graph, we can see a steep line between year 2014-15. This shows a high decrement in the number of cases in that year but on seeing further we can find the increment in the state.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in West Bengal',
        data: [, 38299, 33318, 32513, 30992, 30394],
        borderWidth: 1
      }]
    };
    newInfo7 = "The graph shows a clear decrement from they 2014- 2018. The changes in number of cases are just 10k but overall it is showing a decreased in cases.";
  }

  barchart7.data = newData;
  barchart7.update();
  updateGraphInfo7(newInfo7);
});

graphContainer7.addEventListener('mouseenter', function() {
  graphInfo7.style.display = 'block';
});

graphContainer7.addEventListener('mouseleave', function() {
  graphInfo7.style.display = 'none';
});
