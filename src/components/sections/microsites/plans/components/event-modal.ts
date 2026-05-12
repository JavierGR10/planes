interface EventModalOptions {
  modalId: string;
  imageId: string;
  titleId: string;
  cardSelector: string;
  linkSelector: string;
}

export const setupEventModal = ({
  modalId,
  imageId,
  titleId,
  cardSelector,
  linkSelector,
}: EventModalOptions) => {
  const modal = document.getElementById(modalId) as HTMLElement | null;
  const modalImage = document.getElementById(imageId) as HTMLImageElement | null;
  const modalTitle = document.getElementById(titleId) as HTMLElement | null;
  const modalHref = modal?.querySelector<HTMLAnchorElement>(linkSelector) ?? null;

  if (!modal || !modalImage || !modalTitle || !modalHref) {
    return;
  }

  document.querySelectorAll<HTMLElement>(cardSelector).forEach((card) => {
    card.addEventListener('click', () => {
      const { image, flyer, title, href } = card.dataset;
      const modalImageSrc = flyer || image;

      if (!modalImageSrc || !title || !href) {
        return;
      }

      modalImage.src = modalImageSrc;
      modalImage.alt = title;
      modalTitle.textContent = title;
      modalHref.href = href;
    });
  });

  let scrollY = 0;

  modal.addEventListener('toggle', (event) => {
    const popoverEvent = event as ToggleEvent;

    if (popoverEvent.newState === 'open') {
      scrollY = window.scrollY;

      document.body.style.top = `-${scrollY}px`;
      document.body.setAttribute('data-scroll-lock', '');
      document.documentElement.setAttribute('data-modal-open', '');
      return;
    }

    document.body.removeAttribute('data-scroll-lock');
    document.body.style.top = '';
    document.documentElement.removeAttribute('data-modal-open');

    window.scrollTo(0, scrollY);
  });
};