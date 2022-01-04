import React, { useEffect } from 'react';

const CustomSelect = ({ handleSortBy, style }) => {
  useEffect(() => {
    let customSelectArr, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    customSelectArr = document.getElementsByClassName('custom-select');
    l = customSelectArr.length;
    for (let i = 0; i < l; i++) {
      selElmnt = customSelectArr[i].getElementsByTagName('select')[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement('DIV');
      a.setAttribute('class', 'select-selected');
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      customSelectArr[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement('DIV');
      b.setAttribute('class', 'select-items select-hide');
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement('DIV');
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.setAttribute('data-text', selElmnt.options[j].value);
        c.addEventListener('click', function (e) {
          /* When an item is clicked, update the original select box,
        and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName('select')[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName('same-as-selected');
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute('class');
              }
              this.setAttribute('class', 'same-as-selected');
              break;
            }
          }
          h.click();
          handleSortBy(s.value);
        });
        b.appendChild(c);
      }
      customSelectArr[i].appendChild(b);
      a.addEventListener('click', function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
      });
    }

    /* A function that will close all select boxes in the document,
  except the current select box: */
    function closeAllSelect(elmnt) {
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName('select-items');
      y = document.getElementsByClassName('select-selected');
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt === y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove('select-arrow-active');
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add('select-hide');
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
then close all select boxes: */
    document.addEventListener('click', closeAllSelect);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const selectItems = document.querySelectorAll('.select-items div');
    if (!style) {
      document.querySelector('.select-selected').innerHTML =
        'Choose your favorite style';
    } else
      for (let item of selectItems) {
        if (item.getAttribute('data-text') === style) {
          item.click();
        }
      }
    // eslint-disable-next-line
  }, [style]);

  return (
    <div className="custom-selector">
      <div className="custom-select">
        <select name="sort_by" className="form-select">
          <option>Choose your favorite style</option>
          <option value="az">Alphabetically, A-Z</option>
          <option value="za">Alphabetically, Z-A</option>
          <option value="lowtohigh">Price, low to high</option>
          <option value="hightolow">Price, high to low</option>
          <option value="oldtonew">Date, old to new</option>
          <option value="newtoold">Date, new to old</option>
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
