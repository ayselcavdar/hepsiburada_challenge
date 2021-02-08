const currencyFormatter = (price) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" })
    .format(price)
    .substring(1);

export default currencyFormatter;
