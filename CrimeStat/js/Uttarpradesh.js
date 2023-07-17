const ctx6 = document.getElementById('up').getContext('2d');
const graphContainer6 = document.getElementById('upChart');
const graphInfo6 = document.getElementById('upgraphInfo');

const initialData6 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart6 = new Chart(ctx6, {
  type: 'line',
  data: initialData6,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo6(info) {
  graphInfo6.textContent = info;
}

const dropdown6 = document.getElementById('dropdown');
dropdown6.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo6;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in UP',
        data: [, 1737, 2208, 2639, 4971, 6280],
        borderWidth: 1
      }]
    };
    newInfo6 = "While taking look at this graph. We can clearly see that the record hasn’t been good. The increased rate from 2014-2018 is a lot and more is in the gap of 2016-17. After reading few news articles, we go to know that most of the money related frauds took place, in which customers’ important credentials get leaked and that were being used illegally. Only 2018 year showed 48% of rise in cases.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in UP',
        data: [, 4732, 4889, 4324, 4018, 3806],
        borderWidth: 1
      }]
    };
    newInfo6 = "After taking  a look at the graph, we can clearly see the steep decrement after the year 2016. The cases are still high but the graph remained decreasing from 2016-2019. We looked into the matter and found at that after the change of government the law and order improved in the area.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in UP',
        data: [, 1397, 1006, 1438, 825, 1048],
        borderWidth: 1
      }]
    };
    newInfo6 = "This graph shows a significant change  and also the zig-zag pattern in its cases. First decresed, then increased and after that again change. But we analyse it on its basis of starting and ending point we can say that the graph is overall decreased one.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Uttar Pradesh',
        data: [, 38467, 35908, 49262, 56011 , 59445],
        borderWidth: 1
      }]
    };
    newInfo6 = "After taking  a look at the graph, we can clearly see a tremendous increment in the cases after the year 2015 . The number of cases are also high at alarming rate. In the year 2018 it almost touched 60k which is very shameful for the government of that state.";
  }

  barchart6.data = newData;
  barchart6.update();
  updateGraphInfo6(newInfo6);
});

graphContainer6.addEventListener('mouseenter', function() {
  graphInfo6.style.display = 'block';
});

graphContainer6.addEventListener('mouseleave', function() {
  graphInfo6.style.display = 'none';
});
