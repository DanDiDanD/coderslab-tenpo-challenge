import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import { renderWithProviders } from '../../../test/utils';
import { PokemonTCG } from '../pages/PokemonTCG';

const HEADING_TEXT = /Pokemon Trading Card Game/i;
const POKEMON_ALT_PREVIEW_PAGE_1 = /Vista previa de ampharos/i;
const POKEMON_ALT_PREVIEW_PAGE_2 = /Vista previa de blastoise/i;
const PAGE_SIZE = 5;

describe('PokemonTCG - infinite scrolling', () => {
  it('renders pokemon card page', async () => {
    renderWithProviders(<PokemonTCG />);

    expect(
      screen.getByRole('heading', { name: HEADING_TEXT }),
    ).toBeInTheDocument();
  });

  it('renders first page of cards', async () => {
    renderWithProviders(<PokemonTCG />);

    expect(
      await screen.findByAltText(POKEMON_ALT_PREVIEW_PAGE_1),
    ).toBeInTheDocument();

    expect(await screen.findAllByRole('img')).toHaveLength(PAGE_SIZE);
  });

  it('renders first page and fetches next when sentinel appears', async () => {
    renderWithProviders(<PokemonTCG />);

    expect(await screen.findAllByRole('img')).toHaveLength(PAGE_SIZE);

    mockAllIsIntersecting(true);

    await waitFor(async () => {
      expect(screen.getAllByRole('img')).toHaveLength(PAGE_SIZE * 2);
      expect(
        await screen.findByAltText(POKEMON_ALT_PREVIEW_PAGE_2),
      ).toBeInTheDocument();
    });
  });
});
