import { motion } from 'motion/react';
import { motionTags } from './heroMotion';

function HtmlContent({ as = 'div', html, children, className, containerClassName, style, motionProps }) {
  const Tag = motionProps ? (motionTags[as] ?? motion.div) : as;
  const mergedClassName = [containerClassName, className].filter(Boolean).join(' ');

  if (html) {
    const HtmlTag = motionProps ? (motionTags[as] ?? motion.div) : 'div';

    return (
      <HtmlTag
        className={containerClassName}
        style={style}
        dangerouslySetInnerHTML={{ __html: html }}
        {...motionProps}
      />
    );
  }

  return (
    <Tag className={mergedClassName} style={style} {...motionProps}>
      {children}
    </Tag>
  );
}

export default HtmlContent;
