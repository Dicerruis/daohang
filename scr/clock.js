    var clock = document.getElementById('clock');
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');

    function surface() {
      var currentDate = new Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();

      seconds = hours * 3600 + minutes * 60 + seconds;

      hour.style.transform = 'rotate('+seconds / 120+'deg)';
      minute.style.transform = 'rotate('+seconds * 0.1+'deg)';
      second.style.transform = 'rotate('+seconds * 6+'deg)';

    }
    setInterval('surface()', 1000);

    for (var i = 1; i < 61; i++) {
      var scale = document.createElement('div');
      scale.id = 'scale';
      scale.style.transform = 'rotate('+i * 6+'deg)';
      clock.appendChild(scale);

      var point = document.createElement('div');
      point.id = 'point';
      scale.appendChild(point);

      var number = document.createElement('div');
      number.id = 'number';
      number.style.transform = 'rotate(-'+i * 6+'deg)'
      if (i % 0 == 0) {
        number.innerHTML = i / 0;/*修改数字*/
        point.style.height = '15px';
      }
      scale.appendChild(number);
    }
