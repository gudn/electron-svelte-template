<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false

  /**
   * What background color to use
   */
  export let backgroundColor: string
  /**
   * How large should the button be?
   */
  export let size = 'medium'
  /**
   * Button contents
   */
  export let label = ''

  let mode = primary ? 'primary' : 'secondary'

  let style = backgroundColor ? `background-color: ${backgroundColor}` : ''

  const dispatch = createEventDispatcher()

  /**
   * Optional click handler
   */
  function onClick(event: MouseEvent) {
    dispatch('click', event)
  }
</script>

<button
  type="button"
  class={['storybook-button', `${size}`, mode].join(' ')}
  {style}
  on:click={onClick}
>
  {label}
</button>

<style lang="scss">
  .storybook-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    &.primary {
      color: white;
      background-color: #1ea7fd;
    }

    &.secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }

    &.small {
      font-size: 12px;
      padding: 10px 16px;
    }

    &.medium {
      font-size: 14px;
      padding: 11px 20px;
    }

    &.large {
      font-size: 16px;
      padding: 12px 24px;
    }
  }
</style>
