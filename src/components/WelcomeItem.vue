<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>
    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  display: flex;
  margin-top: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  place-content: center;
  place-items: center;
}

h3 {
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 500;
}

@media (width >= 1024px) {
  .item {
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    margin-top: 0;
  }

  i {
    position: absolute;
    top: calc(50% - 25px);
    left: -26px;
    width: 50px;
    height: 50px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-background);
  }

  .item::before {
    position: absolute;
    bottom: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    border-left: 1px solid var(--color-border);
    content: ' ';
  }

  .item::after {
    position: absolute;
    top: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    border-left: 1px solid var(--color-border);
    content: ' ';
  }

  .item:first-of-type::before {
    display: none;
  }

  .item:last-of-type::after {
    display: none;
  }
}
</style>
