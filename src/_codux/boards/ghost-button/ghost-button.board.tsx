import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import ghostCover from '../../../_codux/covers/ghostCover.png'

export default createBoard({
    name: 'GhostButton',
    Board: () => <Theme><Button variant='ghost'>Hello</Button></Theme>,
    isSnippet: true,
    cover: ghostCover
});
