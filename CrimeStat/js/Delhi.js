const ctx2 = document.getElementById('delhi').getContext('2d');
const graphContainer2 = document.getElementById('delhiChart');
const graphInfo2 = document.getElementById('delhigraphInfo');

const initialData2 = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart2 = new Chart(ctx2, {
  type: 'line',
  data: initialData2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo2(info) {
  graphInfo2.textContent = info;
}

const dropdown2 = document.getElementById('dropdown');
dropdown2.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo2;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in Delhi',
        data: [, 226, 177, 98, 162, 189],
        borderWidth: 1
      }]
    };
    newInfo2 = "On looking at the graph, we can see the maximum rate of cyber crimes were in the year of 2014, few reports show that they were rose up to 69% from normal, which was quite high. Most of the complaints were regarding unethical practices by e-commerce companies with all the fraudulent activities faced by the consumers. The graph starting to decline as the year went but after 2016 it again raised. Gap of increment between 2016-2017 is more in comparison to 2018. ";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'No. of Murder cases in Delhi',
        data: [, 570, 528, 487, 513, 521],
        borderWidth: 1
      }]
    };
    newInfo2 = "While looking at the capital city’s graph we can seen that its not that much change from 2015-2019. Few increments and few decrements can be seen but the graph never shows any steep changes. Reports revealed that murders have dipped by 3.83% , while the other crimes came down by 12%. ";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in Delhi',
        data: [, 1969, 2366, 2499, 2965, 2727],
        borderWidth: 1
      }]
    };
    newInfo2 = "After looking at the graph, we can see that the cases took its peak in the year 2017 and then started to decrease next year. Being the capital city of India its not quite good rate and also the law and order.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Committed in Delhi',
        data: [, 15265, 17222, 15310, 13076, 13640],
        borderWidth: 1
      }]
    };
    newInfo2 = "Looking at the graph, one can easily say that the differences are not that much. This is that time when we all were seeing reports of multiple crimes against women in Delhi. After the 2015, the graph can be seen decreased but overall difference of number cases are not that much.";
  }

  barchart2.data = newData;
  barchart2.update();
  updateGraphInfo2(newInfo2);
});

graphContainer2.addEventListener('mouseenter', function() {
  graphInfo2.style.display = 'block';
});

graphContainer2.addEventListener('mouseleave', function() {
  graphInfo2.style.display = 'none';
});
