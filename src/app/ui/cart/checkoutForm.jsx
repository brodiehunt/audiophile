import styles from "@/app/styles/cart/checkoutForm.module.css";

export default function CheckoutForm({
  handleChange,
  formState,
  handleBlur,
  errors,
}) {
  return (
    <form>
      <h3 className={styles.formGroupTitle}>Billing details</h3>
      <div className={styles.formGroup}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.inputLabel}>
            Name
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="text"
            placeholder="John Doe"
            value={formState.name}
            name="name"
            id="name"
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email Address
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="email"
            placeholder="johndoe@email.com"
            value={formState.email}
            name="email"
            id="email"
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.inputLabel}>
            Phone Number
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="tel"
            placeholder="+61401813482"
            value={formState.phone}
            name="phone"
            id="phone"
          />
          {errors.phone && <div className={styles.error}>{errors.phone}</div>}
        </div>
      </div>
      <h3 className={styles.formGroupTitle}>Shipping info</h3>
      <div className={styles.formGroup}>
        <div className={`${styles.inputGroup} ${styles.longGroup}`}>
          <label htmlFor="address" className={styles.inputLabel}>
            Your Address
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="text"
            placeholder="13 Sydney Street"
            value={formState.address}
            name="address"
            id="address"
          />
          {errors.address && (
            <div className={styles.error}>{errors.address}</div>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="zip" className={styles.inputLabel}>
            ZIP Code
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="text"
            placeholder="2233"
            value={formState.zip}
            name="zip"
            id="zip"
          />
          {errors.zip && <div className={styles.error}>{errors.zip}</div>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="city" className={styles.inputLabel}>
            City
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="text"
            placeholder="Sydney"
            value={formState.city}
            name="city"
            id="city"
          />
          {errors.city && <div className={styles.error}>{errors.city}</div>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="country" className={styles.inputLabel}>
            Country
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
            type="text"
            placeholder="Australia"
            value={formState.country}
            name="country"
            id="country"
          />
          {errors.country && (
            <div className={styles.error}>{errors.country}</div>
          )}
        </div>
      </div>
      <h3 className={styles.formGroupTitle}>Payment details</h3>
      <div className={styles.formGroup}>
        <fieldset className={`${styles.radioGroup} ${styles.longGroup}`}>
          <div className={styles.fieldsetGrid}>
            <legend className={styles.radioGroupLabel}>Payment Method</legend>
            <div className={styles.radioInputGroup}>
              <input
                onChange={handleChange}
                className={styles.radioInput}
                type="radio"
                id="eMoney"
                name="payment"
                value="eMoney"
                selected
              />
              <label htmlFor="eMoney" className={styles.radioLabel}>
                e-Money
              </label>
            </div>
            <div className={styles.radioInputGroup}>
              <input
                onChange={handleChange}
                className={styles.radioInput}
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                defaultChecked
              />
              <label htmlFor="cash" className={styles.radioLabel}>
                Cash on Delivery
              </label>
            </div>
          </div>
        </fieldset>
        {formState.payment === "eMoney" && (
          <>
            <div className={styles.inputGroup}>
              <label htmlFor="eNumber" className={styles.inputLabel}>
                e-Money Number
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.formInput}
                type="number"
                placeholder="238521993"
                value={formState.eNumber}
                name="eNumber"
                id="eNumber"
              />
              {errors.eNumber && (
                <div className={styles.error}>{errors.eNumber}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="ePin" className={styles.inputLabel}>
                e-Money PIN
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.formInput}
                type="number"
                placeholder="6891"
                value={formState.ePin}
                name="ePin"
                id="ePin"
              />
              {errors.ePin && <div className={styles.error}>{errors.ePin}</div>}
            </div>
          </>
        )}
      </div>
    </form>
  );
}
