<template>
  <div>
    <header class="od-header">
      <div class="od-header__side-left">
        <div class="od-header__logo">
          <Icon
            name="icons:preview" 
            mode="svg" 
            size="32"
          />
          <p class="od-header__logo-text od-text od-text_size_m od-text_weight_bold">
            ООО «Тель»
          </p>
        </div>
      </div>
      <div class="od-header__side-right">
        <img
          class="od-header__userpic"
          src="@/public/img/userpic.png"
          srcset="@/public/img/userpic@2x.png 2x"
          alt="userpic"
        />
        <Icon 
          name="icons:arrow-down-s"
          class="od-icon od-icon_size_s"
          mode="svg"
        />
      </div>
    </header>
    <div class="od-layout od-layout--cols2">
      <div>
        <div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-opened">
          <Icon
            name="icons:arrow-up-s"
            class="od-icon od-icon_size_s"
            mode="svg"
          />
          <p class="od-sidenav__heading-text od-text od-text_size_xs od-text_weight_regular">
            На подпись
          </p>
        </div>
        <div class="od-sidenav od-sidenav__list-item od-sidenav__list-item_state_selected">
          <p class="od-sidenav__list-item-text od-text od-text_size_s od-text_weight_regular">
            Соглашение о неразглашении
          </p>
        </div>
        <div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-opened">
          <Icon
            name="icons:arrow-up-s"
            class="od-icon od-icon_size_s"
            mode="svg"
          />
          <p class="od-sidenav__heading-text od-text od-text_size_xs od-text_weight_regular">
            Подписано, в работе
          </p>
        </div>
        <div class="od-sidenav od-sidenav__list-item od-sidenav__heading_state_default">
          <p class="od-sidenav__list-item-text od-text od-text_size_s od-text_weight_regular">
            Дополнительное соглашение к трудовому длговору
          </p>
        </div>
        <div class="od-sidenav od-sidenav__list-item od-sidenav__heading_state_default">
          <p class="od-sidenav__list-item-text od-text od-text_size_s od-text_weight_regular">
            Трудовой договор
          </p>
        </div>
        <div class="od-sidenav od-sidenav__heading od-sidenav__heading_state_is-opened">
          <Icon
            name="icons:arrow-down-s"
            class="od-icon od-icon_size_s"
            mode="svg"
          />
          <p class="od-sidenav__heading-text od-text od-text_size_xs od-text_weight_regular">
            Завершено
          </p>
        </div>
      </div>
      <div>
        <p class="od-text od-text_size_l od-text_weight_bold">
          Соглашение о неразглашении
        </p>
      </div>
    </div>

  </div>
</template>