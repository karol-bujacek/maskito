import {ElementState} from './element-state';
import {MaskitoMask} from './mask';
import {MaskitoPostprocessor, MaskitoPreprocessor} from './mask-processors';
import {MaskitoPlugin} from './plugin';

export interface MaskitoOptions {
    readonly mask: MaskitoMask;
    readonly preprocessor?: MaskitoPreprocessor;
    readonly postprocessor?: MaskitoPostprocessor;
    readonly plugins?: readonly MaskitoPlugin[];
    readonly overwriteMode?:
        | 'replace'
        | 'shift'
        | ((elementState: ElementState) => 'replace' | 'shift');
}
