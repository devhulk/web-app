export { default as AppLogo } from '../../components/AppLogo.vue'
export { default as Button } from '../../components/Button.vue'
export { default as FormInput } from '../../components/FormInput.vue'
export { default as GoogleButton } from '../../components/GoogleButton.vue'
export { default as LoginButton } from '../../components/LoginButton.vue'
export { default as LoginForm } from '../../components/LoginForm.vue'
export { default as SignUpButton } from '../../components/SignUpButton.vue'
export { default as BakBakNuxtLogo } from '../../components/bak/bak/NuxtLogo.vue'
export { default as BakBakTutorial } from '../../components/bak/bak/Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
