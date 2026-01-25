<script setup>
  import userAvatar1 from '@/assets/imgs/avatars/user_1.jpg'
  import userAvatar2 from '@/assets/imgs/avatars/user_2.jpg'

  let chatData = {
      messages: [
        {'time': '4:27',
          avatar: userAvatar1,
          'title': 'Ope',
          'text': `Gee, its been good news all day. i met someone special today. she's really pretty.
           i’ll like to talk more about it but it has to be tomorrow. she should grab a drink later.

           Call me if you get this okay.`,
        },
        {'time': '4:27',
          avatar: userAvatar2,
          'title': 'Me',
          'text': `Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum sodales nisl interdum id eget.
          Eget libero viverra tristique massa fringilla sit..`,
        },
        {'time': '4:27',
          avatar: userAvatar1,
          'title': 'Ope',
          'text': `Lorem ipsum dolor sit amet consectetur. Pellentesque sagittis sed dictum lorem. Neque eget faucibus
          dolor risus posuere vitae sodales. Sit odio morbi dolor egestas sit aliquam velit cum.
          Pharetra tortor sit vestibulum `,
        },
      ]
  }

</script>

<template>
  <section class="conv">
    <div class="conv__heading">
      <div class="conv__userinfo">
        <div class="conv__userinfo-avatar">
          <img src="../assets/imgs/avatars/user_1.jpg" alt="avatar" class="conv__userinfo-image">
        </div>
        <div class="conv__userinfo-online online-tag"></div>
        <div class="conv__userinfo-title">
          <p class="conv__userinfo-username">Ope</p>
          <p class="conv__userinfo-status">Active</p>
        </div>
      </div>
      <div class="conv__buttons">
        <button class="conv__buttons-button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.57143C0 1.15127 1.15127 0 2.57143 0H3.74711C4.48457 0 5.1274 0.501906 5.30627 1.21735L6.25409 5.00865C6.41092 5.63597 6.17652 6.29618 5.65922 6.68416L4.5504 7.51577C4.43526 7.60213 4.41023 7.72858 4.44257 7.81687C5.41587 10.4738 7.52615 12.5841 10.1831 13.5574C10.2714 13.5898 10.3979 13.5647 10.4842 13.4496L11.3158 12.3408C11.7038 11.8235 12.364 11.5891 12.9913 11.7459L16.7826 12.6937C17.4981 12.8726 18 13.5154 18 14.2529V15.4286C18 16.8487 16.8487 18 15.4286 18H13.5C6.04416 18 0 11.9558 0 4.5V2.57143Z" fill="#1E1E1E"/>
          </svg>
        </button>
        <button class="conv__buttons-button">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.57143 0C1.15127 0 0 1.16406 0 2.6V10.4C0 11.8359 1.15127 13 2.57143 13H9.64286C11.063 13 12.2143 11.8359 12.2143 10.4V2.6C12.2143 1.16406 11.063 0 9.64286 0H2.57143Z" fill="#1E1E1E"/>
            <path d="M15.8052 12.35L13.5 10.0192V2.98073L15.8052 0.649969C16.6151 -0.168988 18 0.411036 18 1.56921V11.4307C18 12.5889 16.6151 13.1689 15.8052 12.35Z" fill="#1E1E1E"/>
          </svg>
        </button>
        <button class="conv__buttons-button" style="background: none">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6.1C10.5 5.21634 11.3954 4.5 12.5 4.5C13.6046 4.5 14.5 5.21634 14.5 6.1C14.5 6.98366 13.6046 7.7 12.5 7.7C11.3954 7.7 10.5 6.98366 10.5 6.1ZM10.5 12.5C10.5 11.6163 11.3954 10.9 12.5 10.9C13.6046 10.9 14.5 11.6163 14.5 12.5C14.5 13.3837 13.6046 14.1 12.5 14.1C11.3954 14.1 10.5 13.3837 10.5 12.5ZM10.5 18.9C10.5 18.0163 11.3954 17.3 12.5 17.3C13.6046 17.3 14.5 18.0163 14.5 18.9C14.5 19.7837 13.6046 20.5 12.5 20.5C11.3954 20.5 10.5 19.7837 10.5 18.9Z" fill="#1E1E1E"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="conv__chat">
      <div class="conv__messages">

        <div class="conv__message" v-for="message in chatData.messages">
          <img :src="message.avatar" alt="avatar" class="conv__message-avatar">

          <div class="conv__message__info">
            <div class="conv__message__info-top">
              <span class="conv__message__info-top__title">{{ message.title }}</span>
              <span class="conv__message__info-top__time">{{ message.time }}</span>
            </div>

            <p class="conv__message__info__text">{{ message.text }}</p>
          </div>
        </div>

      </div>
    </div>
<!--    <div class="conv__send">-->
<!--      <form class="conv__send__form">-->
<!--        <input type="text" class="conv__send__form-text" placeholder="Type something...">-->
<!--      </form>-->
<!--    </div>-->
  </section>
</template>

<style scoped lang="scss">

  .conv {
    background-color: var(--main-background-color);
    grid-column: 5/12;

    &__message {
      margin: 20px;
      padding-bottom: 20px;
      display: flex;
      gap: 30px;

      &-avatar {
        width: 70px;
        height: 70px;
        border-radius: 25px;
      }

      &__info-top {
        gap: 20px;
        display: flex;
        align-items: center;
        padding-bottom: 10px;

        &__title {
          font-weight: 500;
        }

        &__time {
          font-weight: 200;
          color: var(--secondary-text-color);
          font-size: 12px;
        }
      }

    }

    &__heading {
      display: flex;
      align-items: center;
      background-color: var(--body-background);
      justify-content: space-between;
      padding: 10px 20px;
    }

    &__userinfo {
      display: flex;
      align-items: center;

      &-online {
        position: relative;
        right: 17px;
        top: 20px;
      }

      &-username {
        font-size: 24px;
        font-weight: 500;
      }

      &-status {
        color: var(--secondary-text-color);
      }

      &-image {
        width: 60px;
        border-radius: 50%;
      }
    }

    &__buttons {

      display: flex;
      align-items: center;
      gap: 20px;

      &-button {
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background-color: var(--main-background-color);
      }
    }
  }
</style>