const ctx3 = document.getElementById('mp').getContext('2d');
const graphContainer3 = document.getElementById('mpChart');
const graphInfo3 = document.getElementById('mpgraphInfo');

const initialData3 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart3 = new Chart(ctx3, {
  type: 'line',
  data: initialData3,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo3(info) {
  graphInfo3.textContent = info;
}

const dropdown3 = document.getElementById('dropdown');
dropdown3.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo3;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in MP',
        data: [, 289, 231, 258, 162, 189],
        borderWidth: 1
      }]
    };
    newInfo3 = "The graph quite shows a zig – zag pattern. Though we can see few increments in few years but overall the rate and graph is a decreasing one.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in MP',
        data: [, 2339, 2004, 1908, 1879, 1795],
        borderWidth: 1
      }]
    };
    newInfo3 = "On looking the graph, we can actually admire this state’s law and order as it have shown decrement through out the graph. After reading few articles, we got to know that with the change in government its law and order got improved.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in MP',
        data: [, 6512, 6583, 7369, 6491, 5232],
        borderWidth: 1
      }]
    };
    newInfo3 = "Though the graph doesn’t show a significant change in the number of cases but still we can see the change between the year 2015 – 2017. The graph first raised and then came to that level again next year.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Madhya Pradesh',
        data: [, 28678, 24231, 26604, 29788, 28942],
        borderWidth: 1
      }]
    };
    newInfo3 = "On looking the graph, we can actually say that the law and order in this area need to be improved against the crimes for women. The number of cases touched 30k in the year 2017 and still hasn’t shown significant decrement next year. The number of cases in 2014 and 2017 are almost equal.";
  }

  barchart3.data = newData;
  barchart3.update();
  updateGraphInfo3(newInfo3);
});

graphContainer3.addEventListener('mouseenter', function() {
  graphInfo3.style.display = 'block';
});

graphContainer3.addEventListener('mouseleave', function() {
  graphInfo3.style.display = 'none';
});
