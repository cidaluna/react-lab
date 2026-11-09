import type { ReactNode, MouseEvent } from 'react';
import './CustomButton.scss';

// Define as propriedades compartilhadas entre os dois elementos.
interface CustomButtonBaseProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'inverted';
  size?: 'small' | 'default' | 'large';
  icon?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescription?: string;
  className?: string;
}

// Define as propriedades exclusivas de um botão de ação.
interface CustomButtonElementProps extends CustomButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: never;
  target?: never;
}

// Define as propriedades exclusivas de um link de navegação.
interface CustomButtonLinkProps extends CustomButtonBaseProps {
  as: 'a';
  href: string;
  target?: '_self' | '_blank';
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  type?: never;
}

// Garante que o componente aceite somente combinações válidas de propriedades.
export type CustomButtonProps =
  | CustomButtonElementProps
  | CustomButtonLinkProps;

// Renderiza um botão reutilizável para ações e navegações.
export function CustomButton(props: CustomButtonProps) {
  const {
    label,
    variant = 'primary',
    size = 'default',
    icon,
    disabled = false,
    ariaLabel,
    ariaDescription,
    className = '',
  } = props;

  const buttonClasses = [
    'custom-button',
    `custom-button--${variant}`,
    `custom-button--${size}`,
    icon ? 'custom-button--with-icon' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && (
        <span className="custom-button__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="custom-button__label">
        {label}
      </span>
    </>
  );

  // Impede a navegação quando um link estiver desabilitado.
  if (props.as === 'a') {
    const { href, target = '_self', onClick } = props;

    // Bloqueia a navegação e a propagação de eventos de links desabilitados.
    const handleDisabledLink = (
      event: MouseEvent<HTMLAnchorElement>,
    ) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClick?.(event);
    };

    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        aria-label={ariaLabel}
        aria-description={ariaDescription}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={handleDisabledLink}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-description={ariaDescription}
      onClick={props.onClick}
    >
      {content}
    </button>
  );
}