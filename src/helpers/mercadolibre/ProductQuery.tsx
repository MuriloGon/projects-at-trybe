interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface Eshop {
  nick_name: string;
  eshop_rubro?: any;
  eshop_id: number;
  eshop_locations: any[];
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

interface Transactions {
  total: number;
  canceled: number;
  period: string;
  ratings: Ratings;
  completed: number;
}

interface Claims {
  rate: number;
  value: number;
  period: string;
}

interface DelayedHandlingTime {
  rate: number;
  value: number;
  period: string;
}

interface Sales {
  period: string;
  completed: number;
}

interface Cancellations {
  rate: number;
  value: number;
  period: string;
}

interface Metrics {
  claims: Claims;
  delayed_handling_time: DelayedHandlingTime;
  sales: Sales;
  cancellations: Cancellations;
}

interface SellerReputation {
  transactions: Transactions;
  power_seller_status: string;
  metrics: Metrics;
  level_id: string;
}

interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  eshop: Eshop;
  seller_reputation: SellerReputation;
}

interface Conditions {
  context_restrictions: any[];
  start_time?: Date;
  end_time?: Date;
  eligible: boolean;
}

interface Metadata {
  campaign_id: string;
  promotion_id: string;
  promotion_type: string;
  discount_meli_amount?: number;
  campaign_discount_percentage?: number;
  campaign_end_date?: Date;
  order_item_price?: number;
}

interface Price {
  id: string;
  type: string;
  conditions: Conditions;
  amount: number;
  regular_amount?: number;
  currency_id: string;
  exchange_rate_context: string;
  metadata: Metadata;
  last_updated: Date;
}

interface Presentation {
  display_currency: string;
}

interface Conditions2 {
  context_restrictions: any[];
  start_time: Date;
  end_time: Date;
  eligible: boolean;
}

interface ReferencePrice {
  id: string;
  type: string;
  conditions: Conditions2;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags: any[];
  last_updated: Date;
}

interface Conditions3 {
  context_restrictions: any[];
  start_time: Date;
  end_time: Date;
  eligible: boolean;
}

interface PurchaseDiscount {
  purchase_discount_id: string;
  campaign_id: string;
  rebate_id: string;
  type: string;
  buy_quantity: number;
  pay_quantity: number;
  discount_percentage?: any;
  conditions: Conditions3;
}

interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: ReferencePrice[];
  purchase_discounts: PurchaseDiscount[];
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

interface Country {
  id: string;
  name: string;
}

interface State {
  id: string;
  name: string;
}

interface City {
  id: string;
  name: string;
}

interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country;
  state: State;
  city: City;
  latitude: string;
  longitude: string;
}

interface ValueStruct {
  number: number;
  unit: string;
}

interface Struct {
  number: number;
  unit: string;
}

interface Value {
  id: string;
  name: string;
  struct: Struct;
  source: any;
}

interface Attribute {
  attribute_group_id: string;
  attribute_group_name: string;
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct: ValueStruct;
  values: Value[];
  source: any;
}

interface DifferentialPricing {
  id: number;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price?: any;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments | null;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: number | null;
  category_id: string;
  official_store_id?: number;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
  order_backend: number;
  use_thumbnail_id: boolean;
  differential_pricing: DifferentialPricing;
}

interface Sort {
  id: string;
  name: string;
}

interface AvailableSort {
  id: string;
  name: string;
}

interface Value2 {
  id: string;
  name: string;
  results: number;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export default interface ProductQuery {
  site_id: string;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: any[];
  available_filters: AvailableFilter[];
}
