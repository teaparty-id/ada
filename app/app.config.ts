export default defineAppConfig({
  ui: {
    colors: {
      primary: 'signal',
      neutral: 'ink'
    },
    button: {
      slots: {
        base: 'rounded-lg font-bold tracking-tight transition-transform active:scale-[0.98]'
      }
    },
    accordion: {
      slots: {
        root: 'flex flex-col gap-3',
        item: 'rounded-xl border border-ink-200 bg-white px-4 dark:border-ink-700 dark:bg-ink-900',
        trigger: 'py-4 text-left text-base font-semibold hover:underline',
        body: 'pb-4 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300'
      }
    }
  }
})
