import type { InViewHookResponse } from 'react-intersection-observer';

type InfiniteScrollTriggerProps = {
  isFetching: boolean;
  inViewRef: InViewHookResponse['ref'];
};

export const InfiniteScrollTrigger = ({
  isFetching,
  inViewRef,
}: InfiniteScrollTriggerProps) => (
  <>
    <div aria-live="polite" className="sr-only" role="status">
      {isFetching ? 'Cargando más resultados...' : ''}
    </div>

    {!isFetching && <div ref={inViewRef}></div>}
  </>
);

export default InfiniteScrollTrigger;
