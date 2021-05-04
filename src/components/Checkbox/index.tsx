
import classNames from 'classnames';
import './index.scss';

interface ICheckboxProps {
    className?: string;
    title: string;
    checked: boolean;
    disabled?: boolean;
    onChange: () => void;
}

export const Checkbox: React.FC<ICheckboxProps> =
    ({className, title, checked, onChange, disabled}: ICheckboxProps) => {
        const id = `id_${title.toLowerCase()}`;

        return (
            <span className={classNames('checkbox', className, {disabled})}>
                <input
                    onChange={() => onChange()}
                    type={'checkbox'}
                    className={'checkbox__input'}
                    id={id}
                    checked={checked}
                />
                <label
                    className={'checkbox__label'}
                    htmlFor={id}
                    data-checked={checked}
                >
                    {title}
                </label>
            </span>
        );
    };
