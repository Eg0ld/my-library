import classNames from 'classnames';
import styles from './ghost-button.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Flex, Text, Button } from '@radix-ui/themes';

export interface GhostButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GhostButton = ({ className }: GhostButtonProps) => {
    return <Theme><Button variant="ghost">Button</Button></Theme>;
};
