<template>
  <div>
    <header>
      <div class="header">
        <div class="header__left">One&#160;Doc&#160;—&#160;Components</div>
        <div class="header__rigth">Демо&#160;HTML&#160;Академии</div>
      </div>
    </header>

    <main>
      <!-- токены -->
      <div class="row-block" id="tokens">
        <div class="row-block__info">
          <div class="row-block__name">Токены</div>
          <div class="row-block__description">токены дизайн-системы</div>
        </div>

        <div class="tokens-grid">
          <div class="tokens">
            <div class="row-block__description">Акцентные цвета</div>

            <div class="token">
              <div class="token__bubble token__bubble_accent_main"></div>
              <div class="token__info">
                <div class="color-name">Главный</div>
                <code>--color-accent-main</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_accent_success"></div>
              <div class="token__info">
                <div class="color-name">Успешного действия</div>
                <code>--color-accent-success</code>
              </div>
            </div>
          </div>

          <div class="tokens">
            <div class="row-block__description">Цвета текста</div>

            <div class="token">
              <div class="token__bubble token__bubble_text_primary"></div>
              <div class="token__info">
                <div class="color-name">Основной</div>
                <code>--color-text-primary</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_text_secondary"></div>
              <div class="token__info">
                <div class="color-name">Второстепенный</div>
                <code>--color-text-secondary</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_text_main"></div>
              <div class="token__info">
                <div class="color-name">Главный</div>
                <code>--color-text-main</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_text_inverse"></div>
              <div class="token__info">
                <div class="color-name">Инверсный</div>
                <code>--color-text-inverse</code>
              </div>
            </div>
          </div>

          <div class="tokens">
            <div class="row-block__description">Цвета фонов</div>

            <div class="token">
              <div class="token__bubble token__bubble_bg_primary"></div>
              <div class="token__info">
                <div class="color-name">Основной</div>
                <code>--color-bg-primary</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_bg_inverse"></div>
              <div class="token__info">
                <div class="color-name">Инверсный</div>
                <code>--color-bg-inverse</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_bg_substrate"></div>
              <div class="token__info">
                <div class="color-name">Подложки</div>
                <code>--color-bg-substrate</code>
              </div>
            </div>

            <div class="token">
              <div class="token__bubble token__bubble_bg_divider"></div>
              <div class="token__info">
                <div class="color-name">Разделители</div>
                <code>--color-bg-divider</code>
              </div>
            </div>
          </div>

          <div class="tokens">
            <div class="tokens-merge">
              <div class="row-block__description">Скругления</div>
              <div class="token">
                <div class="token__bubble token__bubble_border-radius_s"></div>
                <div class="token__info">
                  <div class="color-name">6px</div>
                  <code>--border-radius-s</code>
                </div>
              </div>
            </div>

            <div class="tokens-merge">
              <div class="row-block__description">Отступы</div>
              <p>Отступы кратны 4</p>
            </div>
          </div>
        </div>
      </div>
      <!-- токены -->

      <!-- текст -->
      <div class="row-block" id="text">
        <div class="row-block__info">
          <div class="row-block__name">Текстовые стили</div>
          <div class="row-block__description">od-text</div>
        </div>

        <div>
          <div class="row-block__description">
            Текстовый стиль собирается из нескольких классов в зависимости от
            свойств.
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_l od-text_weight_bold">
              Заголовок
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_l od-text_weight_bold"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_m od-text_weight_bold">
              Заголовок поменьше
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_m od-text_weight_bold"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_s od-text_weight_bold">
              Совсем маленький заголовок
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_s od-text_weight_bold"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_s od-text_weight_regular">
              Основной текст
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_s od-text_weight_regular"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_s od-text_weight_medium">
              Цветной и белый текст
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_s od-text_weight_medium"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_xs od-text_weight_regular">
              Подписи
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_xs od-text_weight_regular"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="od-text od-text_size_xs od-text_weight_medium">
              Цветные и белые подписи
            </div>
            <div>
              <pre><code class="language-html">&lt;div class="od-text od-text_size_xs od-text_weight_medium"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- текст -->

      <!-- хэдер -->
      <div class="row-block" id="header">
        <div class="row-block__info">
          <div class="row-block__name">Шапка (Хэдер)</div>
          <div class="row-block__description">od-header</div>
        </div>

        <div>
          <div class="row-block__description">Шапка</div>
          <header class="od-header">
            <div class="od-header__side-left">
              <div class="od-header__logo">
                <Icon name="icons:preview" mode="svg" size="32" />
                <div
                  class="od-header__logo-text od-text od-text_size_m od-text_weight_bold"
                >
                  ООО «Тель»
                </div>
              </div>
            </div>
            <div class="od-header__side-right">
              <img
                class="od-header__userpic"
                src="@/public/img/userpic.png"
                srcset="@/public/img/userpic@2x.png 2x"
                alt="userpic"
              />
              <div class="od-icon od-icon_size_s">
                <Icon name="icons:arrow-down-s" />
              </div>
            </div>
          </header>
          <pre><code class="language-html">&lt;header class="od-header"&gt;...&lt;/header&gt;</code></pre>
        </div>
      </div>
      <!-- хэдер -->

      <!-- сетка на проекте / лэйаут -->
      <div class="row-block" id="layout">
        <div class="row-block__info">
          <div class="row-block__name">Лэйаут</div>
          <div class="row-block__description">od-layout</div>
        </div>

        <div>
          <div class="row-block__description">
            Трехколоночный лэйаут с равными колонками
          </div>
          <div class="decoration-wrapper">
            <div class="od-layout od-layout--cols3 layout-decoration">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <pre><code class="language-html">&lt;div class="od-layout od-layout_cols_3"&gt;...&lt;/div&gt;</code></pre>
          <br />
          <div class="row-block__description">
            Двухколоночный лэйаут с фиксированной колонкой слева
          </div>
          <div
            class="od-layout od-layout--cols2 layout-decoration-single-border"
          >
            <div></div>
            <div></div>
          </div>
          <pre><code class="language-html">&lt;div class="od-layout od-layout_cols_2"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </div>
      <!-- сетка на проекте / лэйаут -->

      <!-- футер -->
      <div class="row-block" id="footer">
        <div class="row-block__info">
          <div class="row-block__name">Подвал (Футер)</div>
          <div class="row-block__description">od-footer</div>
        </div>

        <div>
          <div class="row-block__description">Футер страницы</div>
          <div class="od-footer">
            <p class="od-footer__label">
              Powered <a class="od-footer__link" href="">by OneDoc</a>
            </p>
          </div>
          <pre><code class="language-html">&lt;div class="od-footer"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </div>
      <!-- футер -->

      <!-- иконки -->
      <div class="row-block" id="icons">
        <div class="row-block__info">
          <div class="row-block__name">Иконки</div>
          <div class="row-block__description">od-icon</div>
        </div>
        <div class="icon">
          <div class="row-block__description">Общий список иконок</div>
          <div class="icon__preview">
            <div>
              <Icon
                name="icons:arrow-down-s"
                class="od-icon od-icon_size_s od-icon_view_primary"
                mode="svg"
              />
              <Icon
                name="icons:arrow-down-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">arrow-down</div>
            </div>

            <div>
              <Icon
                name="icons:arrow-up-s"
                class="od-icon od-icon_size_s od-icon_view_primary"
                mode="svg"
              />
              <Icon
                name="icons:arrow-up-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">arrow-up</div>
            </div>

            <div>
              <Icon
                name="icons:arrow-left-s"
                class="od-icon od-icon_size_s od-icon_view_primary"
                mode="svg"
              />
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_m icon__is-not-ready"
                mode="svg"
              />
              <div class="icon__description">arrow-left</div>
            </div>

            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:cards-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">cards</div>
            </div>

            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:check-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">check</div>
            </div>

            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:link-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">link</div>
            </div>

            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:list-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">list</div>
            </div>

            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:search-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">search</div>
            </div>



            <div>
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:search-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">search</div>
            </div>
            
            <div >
              <Icon
                name="icons:icon-not"
                class="od-icon od-icon_size_s icon__is-not-ready"
                mode="svg"
              />
              <Icon
                name="icons:bell-m"
                class="od-icon od-icon_size_m od-icon_view_primary"
                mode="svg"
              />
              <div class="icon__description">bell</div>
            </div>
          </div>

          <!-- превью -->
          <div class="row-block__description">Визуальный стиль</div>
          <div class="icon__specs">
            <div>
              <div class="icon__wrapper icon__wrapper_bg_primary">
                <Icon
                  name="icons:link-m"
                  class="od-icon od-icon_size_m"
                  mode="svg"
                />
              </div>
              <pre><code class="language-html">&lt;div class="od-icon od-icon_size_m od-icon_view_primary"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="icon__wrapper icon__wrapper_bg_accent">
                <Icon
                  name="icons:link-m"
                  class="od-icon od-icon_size_m od-icon_view_inverse"
                  mode="svg"
                />
              </div>
              <pre><code class="language-html">&lt;div class="od-icon od-icon_size_m od-icon_view_inverse"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="icon__wrapper icon__wrapper_bg_primary">
                <Icon
                  name="icons:link-m"
                  class="od-icon od-icon_size_m od-icon_view_secondary"
                  mode="svg"
                />
              </div>
              <pre><code class="language-html">&lt;div class="od-icon od-icon_size_m od-icon_view_secondary"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- иконки -->

      <!-- логотип -->
      <div class="row-block" id="logo">
        <div class="row-block__info">
          <div class="row-block__name">Логотип</div>
          <div class="row-block__description">od-logo</div>
        </div>

        <div>
          <div class="row-block__description">Логотип сервиса</div>
          <div class="logo-preview">
            <div class="od-logo">
              <Icon name="icons:preview" class="od-icon" mode="svg" size="32" />
            </div>
          </div>
        </div>
      </div>
      <!-- логотип -->

      <!-- поле поиска -->
      <div class="row-block" id="search-field">
        <div class="row-block__info">
          <div class="row-block__name">Поле поиска</div>
          <div class="row-block__description">od-search-field</div>
        </div>

        <div class="input">
          <div class="row-block__description">Поле для поиска по сервису</div>

          <div class="search-field__preview">
            <div class="od-search-field">
              <input
                class="od-search-field__input od-text od-text_size_l od-text_weight_regular"
                placeholder="Поиск по документам"
                type="text"
                name="name"
              />
            </div>
          </div>

          <div>
            <pre><code id="input_code" class="language-html">&lt;div class="od-search-field"&gt;...&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
      <!-- поле поиска -->

      <!-- кнопка -->
      <div class="row-block" id="button">
        <div class="row-block__info">
          <div class="row-block__name">Кнопка</div>
          <div class="row-block__description">od-button</div>
        </div>

        <div class="btn">
          <div class="row-block__description">
            Кнопка. Используется, когда человеку нужно сделать выбор,
            подтвердить или совершить какое-то действие. Например, отправить
            сообщение, оплатить заказ, сохранить изменения, войти в акканут.
          </div>

          <div class="btn__preview">
            <div>
              <div class="btn__wrapper">
                <button class="od-button od-button_view_primary">
                  <Icon
                    name="icons:check-m"
                    class="od-button__icon od-icon od-icon_size_m"
                    mode="svg"
                  />
                  <span
                    class="od-button__text od-text od-text_size_m od-text_weight_medium"
                  >
                    Подписать
                  </span>
                </button>
              </div>
              <pre><code class="language-html">&lt;div class="od-button od-button_view_primary"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="btn__wrapper">
                <button
                  class="od-button od-button_view_primary mix_status_success"
                >
                  <Icon
                    name="icons:check-m"
                    class="od-button__icon od-icon od-icon_size_m"
                    mode="svg"
                  />
                  <span
                    class="od-button__text od-text od-text_size_m od-text_weight_medium"
                  >
                    Подписать
                  </span>
                </button>
              </div>
              <pre><code class="language-html">&lt;div class="od-button od-button_view_primary mix_status_success"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="btn__wrapper">
                <button class="od-button od-button_view_secondary">
                  <span
                    class="od-button__text od-text od-text_size_m od-text_weight_medium"
                  >
                    Подписать
                  </span>
                </button>
              </div>
              <pre><code class="language-html">&lt;div class="od-button od-button_view_secondary"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="btn__wrapper">
                <button class="od-button od-button_view_transparent">
                  <Icon
                    name="icons:link-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </button>
              </div>
              <pre><code class="language-html">&lt;div class="od-button od-button_view_transparent"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="btn__wrapper">
                <button class="od-button od-button_view_transparent-inverse">
                  <Icon
                    name="icons:bell-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </button>
              </div>
              <pre><code class="language-html">&lt;div class="od-button od-button_view_transparent-inverse"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- кнопка -->

      <!-- радиогруппа -->
      <div class="row-block" id="radio-group">
        <div class="row-block__info">
          <div class="row-block__name">Горизонтальный переключатель</div>
          <div class="row-block__description">od-radio-group</div>
        </div>

        <div class="radio-group">
          <div class="row-block__description">
            Выполняет фильтрацию контента, работает по принципу радиокнопки. В
            интерфейсе обычно используется в количестве 2+.
          </div>
          <div>
            <div class="radio-group__wrapper">
              <div class="od-radio-group od-radio-group_ones">
                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-0"
                  name="radio-categories"
                  value="all"
                  checked="true"
                />
                <label class="od-radio-group__label" for="radio-0">
                  <Icon
                    name="icons:cards-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>
              </div>
              <br />
              <div class="od-radio-group">
                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-1"
                  name="radio-categories"
                  value="all"
                  checked="true"
                />
                <label class="od-radio-group__label" for="radio-1">
                  <Icon
                    name="icons:cards-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>

                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-2"
                  name="radio-categories"
                  value="sport"
                />
                <label class="od-radio-group__label" for="radio-2">
                  <Icon
                    name="icons:list-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>

                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-3"
                  name="radio-categories"
                  value="sport"
                />
                <label class="od-radio-group__label" for="radio-3">
                  <Icon
                    name="icons:list-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>

                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-4"
                  name="radio-categories"
                  value="sport"
                />
                <label class="od-radio-group__label" for="radio-4">
                  <Icon
                    name="icons:list-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>

                <input
                  class="od-radio-group__input"
                  type="radio"
                  id="radio-5"
                  name="radio-categories"
                  value="sport"
                />
                <label class="od-radio-group__label" for="radio-5">
                  <Icon
                    name="icons:list-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </label>
              </div>
              <pre><code class="language-html">&lt;div class="od-radio-group"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- радиогруппа -->

      <!-- боковая навигация -->
      <div class="row-block" id="sidenav">
        <div class="row-block__info">
          <div class="row-block__name">Боковая навигация</div>
          <div class="row-block__description">od-sidenav</div>
        </div>

        <div class="sidenav">
          <div class="row-block__description">
            Элементы боковой навигации приложения.
          </div>
          <div class="sidenav__preview">
            <div>
              <div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-opened">
                <Icon
                  name="icons:arrow-up-s"
                  class="od-icon od-icon_size_s"
                  mode="svg"
                />
                <p class="od-sidenav__heading-text od-text od-text_size_xs od-text_weight_regular">
                  Пункт меню с текстом длиннее ширины элемента
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-opened"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-closed">
                <Icon
                  name="icons:arrow-down-s"
                  class="od-icon od-icon_size_s"
                  mode="svg"
                />
                <p class="od-sidenav__heading-text od-text od-text_size_xs od-text_weight_regular">
                  Пункт меню с текстом длиннее ширины элемента
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-closed"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="od-sidenav od-sidenav__list-item od-sidenav__heading_state_default">
                <p class="od-sidenav__list-item-text od-text od-text_size_s od-text_weight_regular">
                  Пункт меню с текстом длиннее ширины элемента
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-sidenav od-sidenav__list-item od-sidenav__heading_state_default"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="od-sidenav od-sidenav__list-item od-sidenav__list-item_state_selected">
                <p class="od-sidenav__list-item-text od-text od-text_size_s od-text_weight_regular">
                  Пункт меню с текстом длиннее ширины элемента
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-sidenav od-sidenav__list-item od-sidenav__list-item_state_selected"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- боковая навигация -->

      <!-- ссылка -->
      <div class="row-block" id="link">
        <div class="row-block__info">
          <div class="row-block__name">Ссылка</div>
          <div class="row-block__description">od-link</div>
        </div>

        <div class="link">
          <div class="row-block__description">Классическая ссылка</div>
          <div class="link__preview">
            <a class="od-link" href="#">
              <Icon
                name="icons:arrow-left-s"
                class="od-icon od-icon_size_s"
                mode="svg"
              />
              <p class="od-link__text od-text od-text_size_s od-text_weight_regular">
                Все документы
              </p>
            </a>
            <pre><code class="language-html">&lt;div class="od-link"&gt;...&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
      <!-- ссылка -->

      <!-- карточка -->
      <div class="row-block" id="card">
        <div class="row-block__info">
          <div class="row-block__name">Карточка</div>
          <div class="row-block__description">od-card</div>
        </div>

        <div class="card">
          <div class="row-block__description">
            Неразрывные пробелы в названии использовать не нужно, максимум 2 строки
          </div>
          <div class="card__preview">
            <div class="od-card">
              <div class="od-card__header">
                <p class="od-card__header-text od-text od-text_size_s od-text_weight_bold">
                  Короткое название
                </p>
                <button class="od-card__header-button od-button od-button_view_transparent" >
                  <Icon
                    name="icons:link-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </button>
              </div>
              <div class="od-card__footer">
                <p class="od-text od-text_size_s od-text_weight_regular">
                  21.03.2022
                </p>
              </div>
            </div>
            <div class="od-card">
              <div class="od-card__header">
                <p class="od-card__header-text od-text od-text_size_s od-text_weight_bold">
                  Длинное название документа в несколько строк
                </p>
                <button class="od-card__header-button od-button od-button_view_transparent">
                  <Icon
                    name="icons:link-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </button>
              </div>
              <div class="od-card__footer">
                <span class="od-badge od-badge_status_waiting od-badge_size_m">
                  Ждет подписания
                </span>
              </div>
            </div>
          </div>
          <pre><code class="language-html">&lt;div class="od-card"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </div>
      <!-- карточка -->

      <!-- управление разделом -->
      <div class="row-block" id="collapse">
        <div class="row-block__info">
          <div class="row-block__name">Коллапс</div>
          <div class="row-block__description">od-collapse</div>
        </div>

        <div class="collapse">
          <div class="row-block__description">
            По сути работы похож на классический аккордион, только блоки
            разворачиваются независимо
          </div>
          <div class="collapse__preview">
            <div>
              <div class="od-collapse od-collapse_state_is-opened">
                <Icon
                  name="icons:arrow-up-m"
                  class="od-icon od-icon_size_m"
                  mode="svg"
                />
                <p class="od-collapse__text od-text od-text_size_l od-text_weight_bold">
                  Открытый раздел
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-collapse od-collapse_state_is-opened"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div>
              <div class="od-collapse od-collapse_state_is-closed">
                <div class="od-icon od-icon_size_m">
                  <Icon
                    name="icons:arrow-down-m"
                    class="od-icon od-icon_size_m"
                    mode="svg"
                  />
                </div>
                <p
                  class="od-collapse__text od-text od-text_size_l od-text_weight_bold"
                >
                  Закрытый раздел
                </p>
              </div>
              <pre><code class="language-html">&lt;div class="od-collapse od-collapse_state_is-closed"&gt;...&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <!-- управление разделом -->



      <!-- бейдж -->
      <div class="row-block" id="badge">
        <div class="row-block__info">
          <div class="row-block__name">Бейдж</div>
          <div class="row-block__description">od-badge</div>
        </div>

        <div class="collapse">
          <div class="row-block__description">
            Бейдж используется для отображения статуса. Применяется в строке нотификаций и карточке документа.
          </div>
          <div class="badge__preview">

            <div>
              <div class="badge__wrapper">
                <div class="od-badge od-badge_status_new od-badge_size_s">
                  Новое
                </div>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_new od-badge_size_s"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_new od-badge_size_m">
                  Новое
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_new od-badge_size_m"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_waiting od-badge_size_s">
                  Ждет подписания
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_waiting od-badge_size_s"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_waiting od-badge_size_m">
                  Ждет подписания
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_waiting od-badge_size_m"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_signed od-badge_size_s">
                  Подписано
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_signed od-badge_size_s"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_signed od-badge_size_m">
                  Подписано
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_signed od-badge_size_m"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_expired od-badge_size_s">
                  Просрочено
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_expired od-badge_size_s"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="badge__wrapper">
                <span class="od-badge od-badge_status_expired od-badge_size_m">
                  Просрочено
                </span>
              </div>
              <pre><code class="language-html">&lt;div class="od-badge od-badge_status_expired od-badge_size_m"&gt;...&lt;/div&gt;</code></pre>
            </div>

          </div>
        </div>
      </div>
      <!-- бейдж -->

      <!-- меню нотификаций -->
      <div class="row-block" id="notifications-menu">
        <div class="row-block__info">
          <div class="row-block__name">Меню нотификаций</div>
          <div class="row-block__description">od-notifications-menu</div>
        </div>

        <div class="collapse">
          <div class="row-block__description">
            Меню нотификаций используется только в хэдере. Работа меню с кнопкой представлена в хэдере
          </div>
          <div class="notifications-menu__preview">
            <div class="od-notifications-menu">

              <div class="od-notifications-menu__item od-notifications-menu__item_status_is-new">
                <div class="od-notifications-menu__item-content">
                  <span class="od-notifications-menu__item-badge od-badge od-badge_status_new od-badge_size_s">
                    Новое
                  </span>
                  <p class="od-text od-text_size_s od-text_weight_bold">Новый документ на подпись</p>
                  <p class="od-text od-text_size_s od-text_weight_regular">Заявление на отпуск, Князева П.В.</p>
                </div>
                <Icon
                  name="icons:arrow-right-m"
                  class="od-notifications-menu__item-icon od-icon od-icon_size_m"
                  mode="svg"
                />
              </div>

              <div class="od-notifications-menu__item">
                <div class="od-notifications-menu__item-content">
                  <span class="od-notifications-menu__item-badge od-badge od-badge_status_new od-badge_size_s">
                    Новое
                  </span>
                  <p class="od-text od-text_size_s od-text_weight_bold">Документ подписан</p>
                  <p class="od-text od-text_size_s od-text_weight_regular">Трудовой договор, Петров А.К.</p>
                </div>
                <Icon
                  name="icons:arrow-right-m"
                  class="od-notifications-menu__item-icon od-icon od-icon_size_m"
                  mode="svg"
                />
              </div>

              <div class="od-notifications-menu__item">
                <div class="od-notifications-menu__item-content">
                  <span class="od-notifications-menu__item-badge od-badge od-badge_status_new od-badge_size_s">
                    Новое
                  </span>
                  <p class="od-text od-text_size_s od-text_weight_bold">Срок подписания документа прошел c</p>
                  <p class="od-text od-text_size_s od-text_weight_regular">Трудовой договор, Вольнова А.С.</p>
                </div>
                <Icon
                  name="icons:arrow-right-m"
                  class="od-notifications-menu__item-icon od-icon od-icon_size_m"
                  mode="svg"
                />
              </div>

            </div>
            <pre><code class="language-html">&lt;div class="od-notifications-menu"&gt;...&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
      <!-- меню нотификаций -->

      <!-- юзер -->
      <div class="row-block" id="user">
        <div class="row-block__info">
          <div class="row-block__name">Юзер</div>
          <div class="row-block__description">od-user</div>
        </div>

        <div class="collapse">
          <div class="row-block__description">
            Компонент юзерпика в связке с дополнительным контентом или контролом
          </div>
          <div class="user__preview">
            <div>
              <div class="od-user od-user_size_s od-user_type_has-icon">
                <img
                  class="od-user__userpic"
                  src="@/public/img/userpic.png"
                  srcset="@/public/img/userpic@2x.png 2x"
                  alt="userpic"
                />
                <Icon
                  name="icons:arrow-down-s"
                  class="od-icon od-icon_size_s"
                  mode="svg"
                />
                <div class="od-user__label"></div>
              </div>
              <pre><code class="language-html">&lt;div class="od-user od-user_size_s od-user_type_has-icon"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <div>
              <div class="od-user od-user_size_m od-user_type_has-label">
                <img
                  class="od-user__userpic"
                  src="@/public/img/userpic.png"
                  srcset="@/public/img/userpic@2x.png 2x"
                  alt="userpic"
                />
                <div class="od-icon od-icon_size_s">
                </div>
                <div class="od-user__label">
                  <p class="od-text od-text_size_s od-text_weight_bold">Петров А.К.</p>
                  <p class="od-text od-text_size_s od-text_weight_regular">Специалист</p>
                </div>
              </div>
              <pre><code class="language-html">&lt;div class="od-user od-user_size_m od-user_type_has-label"&gt;...&lt;/div&gt;</code></pre>
            </div>

          </div>
        </div>
      </div>
      <!-- юзер -->

    </main>
  </div>
</template>