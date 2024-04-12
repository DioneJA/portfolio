<template>
  <section class="page_404 flex items-center justify-center">
    <div class="container flex flex-col items-center justify-center w-full">
      <div class="four_zero_four_bg">
        <h1 class="text-center">404</h1>
      </div>
      <div class="flex flex-col items-center">
        <h3 class="h2">
          {{ $t('notFoundPage.title') }}
        </h3>
        
        <p>{{ $t('notFoundPage.description') }}</p>
        
        <a href="/" class="link_404">{{ $t('notFoundPage.button') }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style lang="scss" scoped>
.page_404{
  background:#fff;
  min-height: calc(100vh - 68px);
}

.page_404  img {
  width:100%;
}

.four_zero_four_bg{
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 500px;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
 }
 
.four_zero_four_bg h1{
  font-size:80px;
  color: var(--color-primary);
}
 
.four_zero_four_bg h3{
  font-size:80px;
}
      
.link_404{			
  transition: .2s ease-in; 
  color: #fff!important;
  padding: 10px 20px;
  background: var(--color-primary);
  margin: 20px 0;
  display: inline-block;
  border-radius: 8px;
  &:hover {
    transition: .2s ease-in;
    background: var(--color-primary-light);
  }
}

.contant_box_404{
  margin-top:-50px;
}
</style>