import { Evidence } from './_base';

export interface EvidenceProp {
    evidence: Evidence;
    action?: () => void;
    isOpen?: boolean;
}
