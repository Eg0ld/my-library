import classNames from 'classnames';
import styles from './classic-button.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Flex, Text, Button } from '@radix-ui/themes';

export interface ClassicButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ClassicButton = ({ className }: ClassicButtonProps) => {
    return <Theme><Button variant="classic">Button</Button></Theme>;
};
