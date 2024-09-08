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

    <div class="od-layout">
      <div class="od-collapse od-collapse_state_is-opened">
        <Icon
          name="icons:arrow-up-m"
          class="od-icon od-icon_size_m"
          mode="svg"
        />
        <p class="od-collapse__text od-text od-text_size_l od-text_weight_bold">
          На подпись
        </p>
      </div>
      <div class="od-layout od-layout--cols3">
        <div class="od-card">
          <div class="od-card__header">
            <p class="od-card__header-text od-text od-text_size_s od-text_weight_bold">
              Соглашение о неразглашении
            </p>
            <nuxt-link to="/545" class="od-card__header-button od-button od-button_view_transparent" >
              <Icon
                name="icons:link-m"
                class="od-icon od-icon_size_m"
                mode="svg"
              />
            </nuxt-link>
          </div>
          <div class="od-card__footer">
            <p class="od-text od-text_size_s od-text_weight_regular">
              23.09.2023
            </p>
          </div>
        </div>
      </div>

      <div class="od-collapse od-collapse_state_is-opened">
        <Icon
          name="icons:arrow-up-m"
          class="od-icon od-icon_size_m"
          mode="svg"
        />
        <p class="od-collapse__text od-text od-text_size_l od-text_weight_bold">
          Подписано, в работе
        </p>
      </div>

      <div class="od-layout od-layout--cols3">
        <div class="od-card">
          <div class="od-card__header">
            <p class="od-card__header-text od-text od-text_size_s od-text_weight_bold">
              Дополнительное соглашение к трудовому договору
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
              21.09.2023
            </p>
          </div>
        </div>
        <div class="od-card">
          <div class="od-card__header">
            <p class="od-card__header-text od-text od-text_size_s od-text_weight_bold">
              Трудовой договор
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
              21.09.2023
            </p>
          </div>
        </div>
      </div>

      <div class="od-collapse od-collapse_state_is-opened">
        <Icon
          name="icons:arrow-down-m"
          class="od-icon od-icon_size_m"
          mode="svg"
        />
        <p class="od-collapse__text od-text od-text_size_l od-text_weight_bold">
          Завершено
        </p>
      </div>

    </div>
    
    <footer class="od-footer">
      <p class="od-footer__label">
        Powered <a class="od-footer__link" href="">by OneDoc</a>
      </p>
    </footer>
  </div>
</template>