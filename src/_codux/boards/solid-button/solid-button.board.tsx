import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import solidCover from '../../../_codux/covers/solidCover.png'

export default createBoard({
    name: 'SolidButton',
    Board: () => <Theme><Button variant='solid'>Hello</Button></Theme>,
    isSnippet: true,
    cover: solidCover
});
