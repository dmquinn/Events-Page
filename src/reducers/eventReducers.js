import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_CREATE_RESET,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_UPDATE_RESET,
  EVENT_CREATE_REVIEW_REQUEST,
  EVENT_CREATE_REVIEW_SUCCESS,
  EVENT_CREATE_REVIEW_FAIL,
  EVENT_CREATE_REVIEW_RESET,
  EVENT_TOP_SUCCESS,
  EVENT_TOP_FAIL,
  EVENT_TOP_REQUEST,
} from "../constants/eventConstants";

export const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload.events,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, event: action.payload };
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// export const productDeleteReducer = (
// 	state = { product: { reviews: [] } },
// 	action
// ) => {
// 	switch (action.type) {
// 		case PRODUCT_DELETE_REQUEST:
// 			return { loading: true };
// 		case PRODUCT_DELETE_SUCCESS:
// 			return { loading: false, success: true };
// 		case PRODUCT_DELETE_FAIL:
// 			return { loading: false, error: action.payload };
// 		default:
// 			return state;
// 	}
// };
// export const productCreateReducer = (
// 	state = { product: { reviews: [] } },
// 	action
// ) => {
// 	switch (action.type) {
// 		case PRODUCT_CREATE_REQUEST:
// 			return { loading: true };
// 		case PRODUCT_CREATE_SUCCESS:
// 			return { loading: false, success: true, product: action.payload };
// 		case PRODUCT_CREATE_FAIL:
// 			return { loading: false, error: action.payload };
// 		case PRODUCT_CREATE_RESET:
// 			return {};
// 		default:
// 			return state;
// 	}
// };
// export const productUpdateReducer = (state = { product: {} }, action) => {
// 	switch (action.type) {
// 		case PRODUCT_UPDATE_REQUEST:
// 			return { loading: true };
// 		case PRODUCT_UPDATE_SUCCESS:
// 			return { loading: false, success: true, product: action.payload };
// 		case PRODUCT_UPDATE_FAIL:
// 			return { loading: false, error: action.payload };
// 		case PRODUCT_UPDATE_RESET:
// 			return { product: {} };
// 		default:
// 			return state;
// 	}
// };
// export const productReviewCreateReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case PRODUCT_CREATE_REVIEW_REQUEST:
// 			return { loading: true };
// 		case PRODUCT_CREATE_REVIEW_SUCCESS:
// 			return { loading: false, success: true };
// 		case PRODUCT_CREATE_REVIEW_FAIL:
// 			return { loading: false, error: action.payload };
// 		case PRODUCT_CREATE_REVIEW_RESET:
// 			return {};
// 		default:
// 			return state;
// 	}
// };
// export const productTopRatedReducer = (state = { products: [] }, action) => {
// 	switch (action.type) {
// 		case PRODUCT_TOP_REQUEST:
// 			return { loading: true, products: [] };
// 		case PRODUCT_TOP_SUCCESS:
// 			return { loading: false, products: action.payload };
// 		case PRODUCT_TOP_FAIL:
// 			return { loading: false, error: action.payload };

// 		default:
// 			return state;
// 	}
// };
