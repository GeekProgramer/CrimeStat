const ctx1 = document.getElementById('bihar').getContext('2d');

// Initial chart data
const initialData1 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

// Create initial chart
const barchart1 = new Chart(ctx1, {
  type: 'line',
  data: initialData1,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo1(info) {
  graphInfo1.textContent = info;
}

const dropdown1 = document.getElementById('dropdown');
dropdown1.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo1;

  // Update chart data based on selected value
  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in Bihar',
        data: [, 114, 242, 309, 433, 374],
        borderWidth: 1
      }]
    };
    newInfo1 = "The graph of this state shows increment but handled it later on. From the year 2014 – 2017 we can clearly see the graph rising but it then saw the decrement after it. Many reports says that after seeing the patterns in frauds that took place among common people, many awareness messages were circulated after 2017 that showed the tremendous change.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in Bihar',
        data: [, 3178, 2581, 2803, 2934, 3138],
        borderWidth: 1
      }]
    };
    newInfo1 = "When we read the Bihar’s graph, we found a tremendous change in increment of cases after 2016. After researching more, we got to know that due to many increased dacoity cases in few parts of state it affected the murders cases as well. ";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in Bihar',
        data: [, 4371, 1658, 2335, 1142, 671],
        borderWidth: 1
      }]
    };
    newInfo1 = "This state has shown a steep graph from 2014-2015 and this was quite big change as the cases from 4500 dropped down to approx.1500 in just one year. But then it took a raise and then after 2016 dropped.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Bihar',
        data: [, 15383, 13904, 13400, 14711, 16920],
        borderWidth: 1
      }]
    };
    newInfo1 = "The graph can be seen with a curve in it but the overall graph doesn’t show a significant change in its number of cases. After 2016 the situation can be seen worsen as the graph takes a raise.";
  }

  // Update the chart with new data
  barchart1.data = newData;
  barchart1.update();
  updateGraphInfo1(newInfo1);
});

const graphContainer1 = document.getElementById('biharChart');
const graphInfo1 = document.getElementById('bihargraphInfo');

graphContainer1.addEventListener('mouseenter', function() {
  graphInfo1.style.display = 'block';
});

graphContainer1.addEventListener('mouseleave', function() {
  graphInfo1.style.display = 'none';
});
