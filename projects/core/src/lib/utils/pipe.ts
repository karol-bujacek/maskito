import {MaskitoPostprocessor, MaskitoPreprocessor} from '../types';

export function maskitoPipe(
    ...processors: ReadonlyArray<MaskitoPreprocessor | null | undefined>
): MaskitoPreprocessor;

export function maskitoPipe(
    ...processors: ReadonlyArray<MaskitoPostprocessor | null | undefined>
): MaskitoPostprocessor;

/* eslint-disable @typescript-eslint/ban-types */
export function maskitoPipe(
    ...processors: ReadonlyArray<Function | null | undefined>
): Function {
    return (initialData: object, ...readonlyArgs: unknown[]) =>
        processors
            .filter((x: Function | null | undefined): x is Function => !!x)
            .reduce((data, fn) => ({...data, ...fn(data, ...readonlyArgs)}), initialData);
}
