const includeHTML = () => {
  const allElement = document.getElementsByTagName("*");
  for (let i = 0; i < allElement.length; i++) {
    const element = allElement[i];
    const file = element.getAttribute("include-html");
    if (file) {
      const httpReq = new XMLHttpRequest();
      httpReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          element.innerHTML = this.responseText;
          element.removeAttribute("include-html");
          includeHTML();
        }
      };
      httpReq.open("GET", file, true);
      httpReq.send();
      return;
    }
  }
};
includeHTML();
