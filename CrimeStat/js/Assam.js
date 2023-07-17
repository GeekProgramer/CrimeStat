const ctx = document.getElementById('assam').getContext('2d');
const graphContainer = document.getElementById('assamChart');
const graphInfo = document.getElementById('assamgraphInfo');

const initialData = {
  labels: [],
  datasets: [{
    label: 'Select a category',
    data: [],
    borderWidth: 1
  }]
};

const barchart = new Chart(ctx, {
  type: 'line',
  data: initialData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateGraphInfo(info) {
  graphInfo.textContent = info;
}

const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', function() {
  const selectedValue = this.value;
  let newData;
  let newInfo;

  if (selectedValue === 'option1') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Cyber Crime cases in Assam',
        data: [, 379, 483, 696, 1120, 2022],
        borderWidth: 1
      }]
    };
    newInfo = "While we take a look at this graph, we can clearly see that Assam hasn’t been able to control its cyber crime cases, it clearly shows the increment. When we looked into the matter closely, we found out that most of the people faced the issues of fake account, hacked personal details and many more cyber attacks.";
  } else if (selectedValue === 'option2') {
    newData = {
      labels: ['0', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Murder cases in Assam',
        data: [, 1343, 1149, 1144, 1241, 1235],
        borderWidth: 1
      }]
    };
    newInfo = "When we look at the graph of Assam, we can see that murder crime rates decreased bit in the year 2015-16 but then again raised, remained constant for one year then again raised up. After reading few articles we got to know that these cases included crime rate against women approx. 154 which was thrice of national avergage.";
  } else if (selectedValue === 'option3') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Juveniles cases in Assam',
        data: [, 487, 624, 436, 192, 150],
        borderWidth: 1
      }]
    };
    newInfo = "While we take a look at the graph of Assam, we can clearly see how the state handled its so efficiently after the year 2015. A tremendous change is being seen, on reading more we found out that government started awareness regarding the crime and the rates showed improvement.";
  } else if (selectedValue === 'option4') {
    newData = {
      labels: ['0', '2014', '2015', '2016', '2017', '2018'],
      datasets: [{
        label: 'Crime in Assam',
        data: [, 19139, 23365, 20869, 23082, 27728],
        borderWidth: 1
      }]
    };
    newInfo = "After taking a look at this state’s graph, we can easily say that the number of cases are too high in this area . It shows a raise from 2016-2019 and the number of cases almost touched 30k that year. ";
  }

  barchart.data = newData;
  barchart.update();
  updateGraphInfo(newInfo);
});

graphContainer.addEventListener('mouseenter', function() {
  graphInfo.style.display = 'block';
});

graphContainer.addEventListener('mouseleave', function() {
  graphInfo.style.display = 'none';
});
