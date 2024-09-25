import { TComponentProps } from '@/aether-ui/utils';

export type TSelectOption = Readonly<{
  /**
   * Value of the option
   *
   * @type {string}
   */
  value: string;
  /**
   * Readonly variable representing a label.
   *
   * @type {string}
   */
  label: string;
  /**
   * Indicates whether the option is disabled.
   *
   * @type {boolean}
   */
  disabled?: boolean;
}>;

export type TSelect = TComponentProps &
  Readonly<{
    /**
     * Id of the Select. Used to generate id for the options too.
     *
     * @type {string}
     */
    id: string;
    /**
     * name of the Select. Used for formData
     *
     * @type {string}
     */
    name: string;
    /**
     * label of the select
     *
     * @type {string}
     */
    label?: string;
    /**
     * Represents a list of selectable options.
     *
     * @type {TSelectOption[]}
     */
    optionList: TSelectOption[];
    /**
     * TAccessibility: Indicate the label for the button.
     *
     * @type {?string}
     */
    labelById?: string;
    /**
     * Optional property that represents the default label for something.
     *
     * @type {string}
     */
    defaultLabel?: string;
    /**
     * Optional property that represents the default value of the select.
     *
     * @type {string}
     */
    defaultValue?: string;
    /**
     * Event handler for when the selected value changes.
     *
     * @param value - The new selected value. It can be a string or a number.
     * @returns void
     */
    onSelectedValueChange?: (value: string) => void;
    /**
     * The ARIA label for the option list.
     *
     * @type {string}
     */
    optionListAriaLabel: string;
    /**
     * Indicates whether the first option should be automatically selected
     * in a dropdown or similar selection component.
     *
     * @type {boolean}
     */
    autoSelectFirstOption?: boolean;
  }>;
