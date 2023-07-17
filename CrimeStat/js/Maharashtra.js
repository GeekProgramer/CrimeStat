const ctx4 = document.getElementById('maha').getContext('2d');
const graphContainer4 = document.getElementById('mahaChart');
const graphInfo4 = document.getElementById('mahagraphInfo');

const initialData4 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart4 = new Chart(ctx4, {
  type: 'line',
  data: initialData4,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo4(info) {
  graphInfo4.textContent = info;
}

const dropdown4 = document.getElementById('dropdown');
dropdown4.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo4;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in Maharashtra',
        data: [, 1879, 2195, 2380, 3604, 3511],
        borderWidth: 1
      }]
    };
    newInfo4 = "Looking at the graph, one can easily draw the conclusion that records are not good in this state. A continuous rise from 2014- 2017 and just bit of  decrement 2018 is seen. We hope people are being aware about the crimes that take place through internet and they shouldn’t share any important credentials with anyone.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in Maharashtra',
        data: [, 2509, 2299, 2103 , 2199, 2142],
        borderWidth: 1
      }]
    };
    newInfo4 = "On looking at the graph, we can clearly find the difference after 2017. The graph was decreasing from 2015- 2017 and the complaints were also getting resolved but then it took a rise and then decreased a bit after 2018.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in Maharashtra',
        data: [, 5407, 5693, 6606, 6026, 5880],
        borderWidth: 1
      }]
    };
    newInfo4 = "Though on looking a the graph we can see the change in the year 2016 but the change is not that significant . The change in the number of cases form starting to ending point is not much differentiable.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Maharashtra',
        data: [, 26693, 31216, 31388, 31979, 35497],
        borderWidth: 1
      }]
    };
    newInfo4 = "On looking at the graph, we can clearly find the increment in the graph. Though it was constant bit from 2015-2016 but still the graph shows high raise in the number of cases.";
  }

  barchart4.data = newData;
  barchart4.update();
  updateGraphInfo4(newInfo4);
});

graphContainer4.addEventListener('mouseenter', function() {
  graphInfo4.style.display = 'block';
});

graphContainer4.addEventListener('mouseleave', function() {
  graphInfo4.style.display = 'none';
});
