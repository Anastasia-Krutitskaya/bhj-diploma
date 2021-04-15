/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    document.querySelector('.sidebar-toggle').addEventListener('click', () => {
      if (document.querySelector('.sidebar-mini').classList.contains('sidebar-open')) {
        document.querySelector('.sidebar-mini').classList.remove('sidebar-open');
        document.querySelector('.sidebar-mini').classList.remove('sidebar-collapse');
      } else {
        document.querySelector('.sidebar-mini').classList.add('sidebar-open');
        document.querySelector('.sidebar-mini').classList.add('sidebar-collapse');
      }
      
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_register').addEventListener('click', () => {
      console.log('hi');
      const modal_item = App.getModal('#modal-register');
      Modal.open('modal_item');  // выдает ошибку: Modal.open is not a function
    })
  }
}