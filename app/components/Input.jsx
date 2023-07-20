import clsx from 'clsx';

export function Input({className = '', type, variant, ...props}) {
  const variants = {
    search:
      'bg-transparent px-0 py-2 hb1-font-custom-small w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90',
    minisearch:
      'bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-30 placeholder:text-inherit hb1-font-custom-small uppercase',
  };

  const styles = clsx(variants[variant], className);

  return <input type={type} {...props} className={styles} />;
}
