import type { MicrositeEventMetadata } from '../shared.types';

type EventLike = MicrositeEventMetadata;

const monthFormatter = new Intl.DateTimeFormat('es-MX', {
  month: 'short',
});

const parseEventEndDate = (eventDate: string) => {
  const [year, month, day] = eventDate.split('-').map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day, 23, 59, 59, 999);
};

export const isEventActive = (eventDate: string, now = new Date()) => {
  const endDate = parseEventEndDate(eventDate);

  if (!endDate) {
    return true;
  }

  return now.getTime() <= endDate.getTime();
};

export const filterActiveEvents = <T extends EventLike>(items: T[], now = new Date()) => {
  return items.filter((item) => isEventActive(item.eventDate, now));
};

export const getEventDateParts = (eventDate: string) => {
  const endDate = parseEventEndDate(eventDate);

  if (!endDate) {
    return {
      day: '--',
      month: '---',
    };
  }

  return {
    day: String(endDate.getDate()).padStart(2, '0'),
    month: monthFormatter.format(endDate).replace('.', '').toUpperCase(),
  };
};

export const getEventMeta = ({ eventType, location }: EventLike) => {
  return [eventType, location].filter((value): value is string => Boolean(value));
};

interface SetupEventVisibilityOptions {
  cardSelector: string;
  emptyStateSelector?: string;
}

export const setupEventVisibility = ({ cardSelector, emptyStateSelector }: SetupEventVisibilityOptions) => {
  const cards = [...document.querySelectorAll<HTMLElement>(cardSelector)];
  const emptyState = emptyStateSelector ? document.querySelector<HTMLElement>(emptyStateSelector) : null;

  let visibleCount = 0;

  cards.forEach((card) => {
    const eventDate = card.dataset.eventDate;
    const isVisible = !eventDate || isEventActive(eventDate);

    card.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
};
