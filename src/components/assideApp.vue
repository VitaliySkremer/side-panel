<template>
  <aside :class="`${isActive && 'is-active'}`" @mouseenter="isActive = true" @mouseleave="isActive = false">
    <div class="aside__logo-nav">
      <img class="aside__logo-nav-img" src="../assets/vue.svg" alt="logo">

<!--      <div class="aside__logo-nav-menu">-->
<!--        <button class="aside__logo-nav-toggle-wrapper-button reset__button" @click="handleCLick">-->
<!--          <span class="material-symbols-outlined">-->
<!--            double_arrow-->
<!--          </span>-->
<!--        </button>-->
<!--      </div>-->
    </div>

    <ul class="menu__list">
      <li class="menu__list-item">
        <router-link class="link" to="/about">
          <span class="material-symbols-outlined link__img">
            apps
          </span>
          <span class="link__text">
            about
          </span>
        </router-link>
      </li>
      <li class="menu__list-item">
        <router-link class="link" to="/informing">
          <span class="material-symbols-outlined link__img">
            info
          </span>
          <span class="link__text">
            informing
          </span>
        </router-link>
      </li>
      <li class="menu__list-item">
        <router-link class="link" to="/shop">
          <span class="material-symbols-outlined link__img">
            shopping_cart
          </span>
          <span class="link__text">
            shop
          </span>
        </router-link>
      </li>
      <li class="menu__list-item">
        <router-link class="link" to="/account">
          <span class="material-symbols-outlined link__img">
            account_circle
          </span>
          <span class="link__text">
            account
          </span>
        </router-link>
      </li>
    </ul>

    <ul class="menu__list settings__list">
      <li class="menu__list-item">
        <router-link class="link" to="/settings">
          <span class="material-symbols-outlined link__img">
            settings
          </span>
          <span class="link__text">
            settings
          </span>
        </router-link>
      </li>
    </ul>
  </aside>
  <div class="bg-is-active" :class="isActive && 'bg-is-active-true'"/>
</template>

<script setup lang="ts">
import {ref} from "vue";

const LOCAL_IS_ACTIVE = 'is-active-aside';

const isActive = ref(localStorage.getItem(LOCAL_IS_ACTIVE) === 'true');

const handleCLick = () => {
  isActive.value = !isActive.value;
  localStorage.setItem(LOCAL_IS_ACTIVE, JSON.stringify(isActive.value))
}

</script>

<style lang="scss" scoped>

aside {
  min-height: 100vh;
  background-color: var(--dark);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: .2s ease-out;
  overflow: hidden;
  position: fixed;
  z-index: 100;

  width: calc(2rem + 36px);


  .aside__logo-nav {
    width: 100%;
    position: relative;

    .aside__logo-nav-toggle-wrapper-button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .aside__logo-nav-menu {
      position: absolute;
      top: 3rem;
      width: fit-content;

      &:hover {
        .material-symbols-outlined {
          transform: translateX(5px);
          color: var(--primary-alt);
        }
      }
    }

    .aside__logo-nav-toggle-wrapper-button {
      cursor: pointer;
    }
  }


  &.is-active {
    width: var(--sidebar-width);

    .aside__logo-nav-menu {
      top: 0;
      right: 0;
    }

    .aside__logo-nav-toggle-wrapper-button {
      transform: rotateZ(180deg);
    }

    .link__text {
      opacity: 1;
    }
  }

  .aside__logo-nav-toggle-wrapper-button {
    color: white;
  }

  .aside__logo-nav-img {
    width: 36px;
  }

  .menu__list {

    margin: -1rem;
    margin-top: 10rem;

    &-item {
      height: 48px;
      display: flex;
    }
  }
  .link {
    color: var(--light);
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    padding-left: 1rem;
    transition: .2s ease-out;

    &__text {
      transition: .2s ease-out;
      font-size: 24px;
      opacity: 0;
    }

    &__img {
      margin-right: 8px;
      font-size: 36px;
    }

    &:hover {
      background-color: var(--dark-alt);
      border-right: 5px solid var(--primary-alt);
    }
  }

  .router-link-exact-active{
    background-color: var(--dark-alt);
    border-right: 5px solid var(--primary-alt);
  }

  .settings__list {
    margin-top: auto;
    padding-bottom: 2rem;
  }
}

.bg-is-active {
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0,0,0, .4);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: opacity .2s ease-out;
}

.bg-is-active-true {
  opacity: 1;
  visibility: visible;
}

.material-symbols-outlined {
  font-size: 32px;
  transition-property: color, transform;
  transition-duration: .2s;
  transition-timing-function: ease-out;
}
</style>