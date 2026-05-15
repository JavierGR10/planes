function HeroBannerContent({
  title,
  titleHtml,
  titleClassName,
  titleStyle,
  renderTitle,
  subtitle,
  subtitleHtml,
  subtitleClassName,
  subtitleStyle,
  renderSubtitle,
  afterSubtitle,
  description,
  descriptionHtml,
  descriptionClassName,
  descriptionStyle,
  renderDescription,
  afterDescription,
  buttonText,
  buttonHref,
  buttonClassName,
  buttonStyle,
  buttonProps,
  renderButton,
}) {
  return (
    <>
      {title &&
        renderTitle({
          content: title,
          html: titleHtml,
          className: titleClassName,
          style: titleStyle,
        })}

      {subtitle &&
        renderSubtitle({
          content: subtitle,
          html: subtitleHtml,
          className: subtitleClassName,
          style: subtitleStyle,
        })}

      {afterSubtitle}

      {description &&
        renderDescription({
          content: description,
          html: descriptionHtml,
          className: descriptionClassName,
          style: descriptionStyle,
        })}

      {afterDescription}

      {buttonText &&
        renderButton({
          href: buttonHref ?? '#',
          className: buttonClassName,
          style: buttonStyle,
          children: buttonText,
          ...buttonProps,
        })}
    </>
  );
}

export default HeroBannerContent;
