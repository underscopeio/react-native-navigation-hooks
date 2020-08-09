import { renderHook } from '@testing-library/react-hooks'
import { Navigation, ModalAttemptedToDismissEvent } from 'react-native-navigation'
import useNavigationModalAttemptedToDismiss from './useNavigationModalAttemptedToDismiss'

describe('useNavigationModalAttemptedToDismiss', () => {
  let triggerEvent: (event: ModalAttemptedToDismissEvent) => void
  let mockRemoveSubscription: () => void
  let mockHandler: () => void

  beforeEach(() => {
    mockHandler = jest.fn(() => {})
    mockRemoveSubscription = jest.fn()

    Navigation.events = jest.fn().mockReturnValue({
      registerModalAttemptedToDismissListener: jest.fn(callback => {
        triggerEvent = callback

        return { remove: mockRemoveSubscription }
      }),
    })
  })

  it('should remove the event listener on unmount', () => {
    const { result, unmount } = renderHook(() => {
      useNavigationModalAttemptedToDismiss(() => {})
    })

    unmount()

    expect(mockRemoveSubscription).toBeCalledTimes(1)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should never call the handler if no event was triggered', () => {
    const { result } = renderHook(() => {
      useNavigationModalAttemptedToDismiss(() => {})
    })

    expect(mockHandler).toBeCalledTimes(0)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should call handler twice when componentId is not provided', () => {
    const { result } = renderHook(() => {
      useNavigationModalAttemptedToDismiss(mockHandler)
    })

    const event1 = { componentId: 'COMPONENT_ID_1' }
    triggerEvent(event1)

    const event2 = { componentId: 'COMPONENT_ID_2' }
    triggerEvent(event2)

    expect(mockHandler).toBeCalledTimes(2)
    expect(mockHandler).toHaveBeenNthCalledWith(1, event1)
    expect(mockHandler).toHaveBeenNthCalledWith(2, event2)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should call handler once if componentId provided', () => {
    const { result } = renderHook(() => {
      useNavigationModalAttemptedToDismiss(mockHandler, 'COMPONENT_ID_1')
    })

    const event = { componentId: 'COMPONENT_ID_1' }
    triggerEvent(event)

    expect(mockHandler).toBeCalledTimes(1)
    expect(mockHandler).toBeCalledWith(event)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should never call the handler if componentId does not match', () => {
    const { result } = renderHook(() => {
      useNavigationModalAttemptedToDismiss(mockHandler, 'COMPONENT_ID_1')
    })

    const event = { componentId: 'COMPONENT_ID_2' }
    triggerEvent(event)

    expect(mockHandler).toBeCalledTimes(0)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })
})