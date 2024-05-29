class LOCAL_STORAGE_HANDLER {
  constructor() {}
  setCurrentPage(page) {
    localStorage.setItem('current_page', JSON.stringify(page));
  }
  getPage() {
    return JSON.parse(localStorage.getItem('current_page')) || null;
  }
}
const localStorage_Handler = new LOCAL_STORAGE_HANDLER();
export default localStorage_Handler;
