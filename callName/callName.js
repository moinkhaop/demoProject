const button = document.getElementById('button');
const result = document.getElementById('result');
const history = document.getElementById('history').getElementsByTagName('tbody')[0];
let count = 0;

button.addEventListener('click', function() {
  const names = ['张三', '李四', '王五', '赵六', '钱七',"土豆", "西红柿", "吴琪","吴琪"];
  const index = Math.floor(Math.random() * names.length);
  const name = names[index];
  result.textContent = name;
  count++;
  const row = history.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = count;
  cell2.textContent = name;
});
