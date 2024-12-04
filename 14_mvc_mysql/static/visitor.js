const tbody = document.querySelector("tbody");
function createVisitor() {
  const form = document.forms["visitor-form"];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요.");
    return;
  }

  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요!");
    return;
  }

  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      const { id, comment, name } = res.data;
      const newHtml = `
      <tr id="tr_${id}">
        <td>${id}</td>
        <td>${name}</td>
        <td>${comment}</td>
         <td><button onclick="editVisitor('${id}')">수정</button></td>
            <td><button onclick="deleteVisitor('this.${id}')">삭제</button></td>
      </tr>
      `;
      tbody.insertAdjacentHTML("beforeend", newHtml);

      form.reset();
    })
    .catch((err) => console.error(err));
}

function deleteVisitor(btn, id) {
  console.log(id);
  console.log(btn);
  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id,
    },
  })
    .then((text) => {
      console.log(text.data);
      //btn.parentElement.parentElement.remove();
      btn.closest(`#tr_${id}`).remove();
    })
    .catch((err) => console.error(err));
}

function editVisitor(id) {
  const form = document.forms["visitor-form"];
  axios({
    method: "get",
    url: `/visitor/${id}`,
  })
    .then((res) => {
      console.log(res.data);
      const { name, comment, id } = res.data;
      form.name.value = name;
      form.comment.value = comment;

      const btnContainer = document.getElementById("btn-group");
      const html = `
      <button type="button" onclick="editDo(${id})">수정하기</button>
      <button type="button" onclick="editCancel()">수정취소</button>
      `;
      btnContainer.innerHTML = html;
    })
    .catch((err) => console.error(err));
}

//fatch /visitor
function editDo(id) {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요.");
    return;
  }

  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요!");
    return;
  }

  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log("res데이터입티다@@@@@@@", res.data);

      const tr = document.querySelector(`#tr_${id}`);
      console.log(tr.children);
      const children = tr.children;
      children[1].textContent = form.name.value;
      children[2].textContent = form.comment.value;
      editCancel();
    })
    .catch((err) => console.error(err));
}

// 수정 취소
function editCancel() {
  // (1) form 안의 input 초기화
  const form = document.forms["visitor-form"];
  //   form.reset();
  form.name.value = "";
  form.comment.value = "";
  // (2) 등록 버튼 보이도록
  const btnContainer = document.getElementById("btn-group");
  btnContainer.innerHTML = `
    <button type="button" onclick="createVisitor()">방명록 등록</button>`;
}
